//basics from https://makecademy.com/connect-esp8266-raspberry-pi/


#include "ESP8266WiFi.h" // get this libary if don't have already
#include 
#include "DHT.h" // get this libary if don't have already

const char* ssid = "your_wifi_network_name";
const char* password = "your_wifi_network_password";

aREST rest = aREST();

WiFiServer server(80);

WiFi.begin(ssid, password);

while (WiFi.status() != WL_CONNECTED) {
delay(500);
Serial.print(".");
}
Serial.println("");
Serial.println("WiFi connected");

rest.variable("testvar",&testvar);

rest.set_id("1");
rest.set_name("relay_board");

// Start the server
server.begin();
Serial.println("Server started");

// Print the IP address
Serial.println(WiFi.localIP());

WiFiClient client = server.available();
if (!client) {
return;
}
while(!client.available()){
delay(1);
}
rest.handle(client);

testvar = dht.readTestvar();
