FROM openjdk:8-alpine

COPY target/uberjar/behumen.jar /behumen/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/behumen/app.jar"]
