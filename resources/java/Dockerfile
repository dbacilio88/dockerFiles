FROM openjdk:8
RUN echo "Descargando imagen base con el comando FROM"
RUN echo "Creammos en enviroment llamado APP_HOME"
ENV APP_HOME=/app
WORKDIR $APP_HOME
RUN ls -la
COPY Demo.java $APP_HOME/Demo.java
RUN cat $APP_HOME/Demo.java
RUN javac Demo.java
RUN echo "Clase de Java compilada..."
ENTRYPOINT ["java", "Demo"]
RUN echo "ejecutamos java"
