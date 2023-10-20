#include <Arduino.h>
#include <WiFi.h>               //we are using the ESP32
//#include <ESP8266WiFi.h>      // uncomment this line if you are using esp8266 and comment the line above
#include <Firebase_ESP_Client.h>
#include <DHT.h>                // Install DHT library by adafruit 1.3.8

#define LED_MAYBOM 27
#define LED_DEN 14
#define LED_CHUONG 12

#define LDR_PIN 32
#define DHT_SENSOR_PIN 4
#define DHT_SENSOR_TYPE DHT11

const float GAMMA = 0.7;
const float RL10 = 50;
//To provide the ESP32 / ESP8266 with the connection and the sensor type
DHT dht_sensor(DHT_SENSOR_PIN, DHT_SENSOR_TYPE);

//Provide the token generation process info.
#include "addons/TokenHelper.h"
//Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"

// Insert your network credentials
#define WIFI_SSID "IoT Lab"
#define WIFI_PASSWORD "IoT@123456"

// Insert Firebase project API Key
#define API_KEY "AIzaSyBxG4qiacxHaHE50h5gBjkwR5icTBGlyb0"

// Insert RTDB URLefine the RTDB URL */
#define DATABASE_URL "https://doamnhietdo-2dd6a-default-rtdb.firebaseio.com/" 

//Define Firebase Data object
FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
int count = 0;
bool signupOK = false;                     //since we are doing an anonymous sign in 
String read_data = "";

void setup(){
  pinMode(LED_MAYBOM, OUTPUT);
  pinMode(LED_DEN, OUTPUT);
  pinMode(LED_CHUONG, OUTPUT);
  dht_sensor.begin();
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  /* Assign the api key (required) */
  config.api_key = API_KEY;

  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;

  /* Sign up */
  if (Firebase.signUp(&config, &auth, "", "")){
    Serial.println("ok");
    signupOK = true;
  }
  else{
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  // /* Assign the callback function for the long running token generation task */
  // config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h
  
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop(){
  int analogValue = analogRead(LDR_PIN);
  analogValue = analogValue/4;
  float voltage = analogValue / 1024. * 5;
  float resistance = 2000 * voltage / (1 - voltage / 5);
  float lux = pow(RL10 * 1e3 * pow(10, GAMMA) / resistance, (1 / GAMMA));
  //temperature and humidity measured should be stored in variables so the user
  //can use it later in the database
  float temperature = dht_sensor.readTemperature();
  float humidity = dht_sensor.readHumidity();
  
  if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 5000 || sendDataPrevMillis == 0)){
    //since we want the data to be updated every second
    sendDataPrevMillis = millis();
    // Enter Temperature in to the DHT_11 Table
    if (Firebase.RTDB.setInt(&fbdo, "Farm 1/Nhiet do", temperature)){
      // This command will be executed even if you dont serial print but we will make sure its working
      Serial.print("Temperature : ");
      Serial.println(temperature);
    }
    else {
      Serial.println("Failed to Read from the Sensor");
      Serial.println("REASON: " + fbdo.errorReason());
    }
    // Enter Humidity in to the DHT_11 Table
    if (Firebase.RTDB.setFloat(&fbdo, "Farm 1/Do am", humidity)){
      Serial.print("Humidity : ");
      Serial.println(humidity);
    }
    else {
      Serial.println("Failed to Read from the Sensor");
      Serial.println("REASON: " + fbdo.errorReason());
    }

    if (Firebase.RTDB.setFloat(&fbdo, "Farm 1/Anh sang", lux)){
      Serial.print("Lux : ");
      Serial.println(lux);
    }
    else {
      Serial.println("Failed to Read from the Sensor");
      Serial.println("REASON: " + fbdo.errorReason());
    }

    if (Firebase.RTDB.getString(&fbdo, "Thietbi1/Maybom")) {
      read_data = fbdo.stringData();
      Serial.print("May bom = ");     
      Serial.println(read_data);
      if (read_data == "Da bat")
      {
        digitalWrite(LED_MAYBOM, HIGH);
      } 
      else
      {
        digitalWrite(LED_MAYBOM, LOW);
      }
    }
    else {
      Serial.println(fbdo.errorReason());
    }
    if (Firebase.RTDB.getString(&fbdo, "Thietbi2/Baochay")) {
      read_data = fbdo.stringData();
      Serial.print("Chuong = ");     
      Serial.println(read_data);
      if (read_data == "Da bat")
      {
        digitalWrite(LED_CHUONG, HIGH);
      } 
      else
      {
        digitalWrite(LED_CHUONG, LOW);
      }
    }
    else {
      Serial.println(fbdo.errorReason());
    }
    if (Firebase.RTDB.getString(&fbdo, "Thietbi3/Den")) {
      read_data = fbdo.stringData();
      Serial.print("Den = ");     
      Serial.println(read_data);
      if (read_data == "Da bat")
      {
        digitalWrite(LED_DEN, HIGH);
      } 
      else
      {
        digitalWrite(LED_DEN, LOW);
      }
    }
    else {
      Serial.println(fbdo.errorReason());
    }
  }
}