FROM openjdk:latest
COPY pom.xml ./
#RUN mvn clean package
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENV PORT=2156
EXPOSE 2156
ENTRYPOINT ["java","-jar","/app.jar"]