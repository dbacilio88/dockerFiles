FROM openjdk:8
ENV APP_HOME=/app
WORKDIR $APP_HOME
RUN ls -la $APP_HOME
COPY target/docker-0.0.1-SNAPSHOT.jar $APP_HOME/docker.jar
RUN ls -la $APP_HOME
CMD echo "Hola curso docker"
RUN ls -la
EXPOSE 8080
ENTRYPOINT ["java","-jar","docker.jar"]

