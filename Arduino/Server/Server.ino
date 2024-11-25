#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

const char* ssid = "S23 de Angel";
const char* password = "asepmi123";

const int led1 = 16;  // salida LED
int brightness = 0;   // brillo LED
const int ldr = A0;   // salida fotocelda
int luzValue = 0;
// const int luz = 14;

const int motionPin = 2;  // Pin donde está conectado el sensor PIR

unsigned long previousMillis = 0;  // Almacena el último tiempo en que se ejecutó el código
const long interval = 2000;        // Intervalo de 5 segundos (5000 milisegundos)

ESP8266WebServer server(80);  // Crear el servidor web en el puerto 80

void setup() {
  pinMode(motionPin, INPUT);  // Configura el pin del sensor como entrada
  pinMode(led1, OUTPUT);
  Serial.begin(9600);

  // Conexión a la red Wi-Fi
  Serial.print("Conectando a ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  // Esperar hasta que se establezca la conexión
  while (WiFi.status() != WL_CONNECTED) {
    delay(900);
    Serial.print(".");
  }

  // Imprimir la IP asignada al dispositivo
  Serial.println("");
  Serial.println("WiFi conectado");
  Serial.print("Dirección IP: ");
  Serial.println(WiFi.localIP());

  // Definir rutas para manejar solicitudes HTTP
  server.on("/", handleRoot);              // Página principal
  server.on("/encender", handleEncender);  // Encender LED
  server.on("/apagar", handleApagar);      // Apagar LED
  server.on("/estado", handleEstado);      // Consultar estado del LED

  server.begin();  // Iniciar servidor web
  Serial.println("Servidor iniciado.");
}

void loop() {
  server.handleClient();                        // Procesar solicitudes de los clientes
  int motionDetected = digitalRead(motionPin);  // Lee el valor del sensor PIR

  // Obtener el tiempo actual
  unsigned long currentMillis = millis();


  // Verificar si han pasado 5 segundos desde la última ejecución
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;  // Actualizar el último tiempo

    // Leer el valor del sensor LDR y determinar el nivel de iluminación
    luzValue = analogRead(ldr);
    int luzCategoria;

    if (luzValue >= 1000) {
      luzCategoria = 3;
    } else if (luzValue > 100 && luzValue < 1000) {
      luzCategoria = 2;
    } else if (luzValue > 50 && luzValue <= 100) {
      luzCategoria = 1;
    } else {
      luzCategoria = 0;
    }

    // Usar switch-case basado en la categoría de luz
    switch (luzCategoria) {
      case 3:
        digitalWrite(led1, HIGH);
        Serial.println("Encendido a: 100%.         " + String(luzValue));
        break;

      case 2:  // Poca luz: LED al 80%
        brightness = 200;
        analogWrite(led1, brightness);
        Serial.println("Encendido a: 80%.         " + String(luzValue));
        if (motionDetected == HIGH) {
          brightness = 255;  // Enciende al 100% si hay movimiento
          Serial.println("Movimiento detectado: Encendido a 100%.         " + String(luzValue));
        }
        analogWrite(led1, brightness);
        break;

      case 1:  // Algo de luz: LED al 50%
        brightness = 120;
        analogWrite(led1, brightness);
        Serial.println("Encendido a: 50%.         " + String(luzValue));
        if (motionDetected == HIGH) {
          brightness = 255;  // Enciende al 100% si hay movimiento
          Serial.println("Movimiento detectado: Encendido a 100%.         " + String(luzValue));
        }
        analogWrite(led1, brightness);
        break;

      case 0:
        brightness = 0;
        analogWrite(led1, brightness);
        Serial.println("Apagado. No necesitas iluminación.         " + String(luzValue));
        break;

      default:
        Serial.println("Error: categoría de luz desconocida.");
        break;
    }
  }
}

void handleRoot() {
  server.send(200, "text/html", "<h1>Servidor ESP8266</h1>");
}

void handleEncender() {
  digitalWrite(led1, HIGH);
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/html", "LED Encendido");
  Serial.println("Led Encendido");
}

void handleApagar() {
  digitalWrite(led1, LOW);
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/html", "LED Apagado");
  Serial.println("Led Apagado");
}

void handleEstado() {
  String estado = (digitalRead(led1) == HIGH) ? "Encendido" : "Apagado";
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/html", estado);
  Serial.println("Estado del LED: " + estado);
}
