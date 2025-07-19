# ----------- Stage 1: Build -------------
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Now copy the full source
COPY . .

# Package the application
RUN mvn clean package -DskipTests

# ----------- Stage 2: Run --------------
FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy built jar from the builder stage
COPY --from=build /app/target/*.jar app.jar

# Expose Spring Boot default port
EXPOSE 8080

# Optional: health check (use only if actuator/health is configured)
HEALTHCHECK --interval=30s --timeout=10s --start-period=20s \
  CMD curl -f http://localhost:8080/actuator/health || exit 1

# Start the application with environment variables
ENV JAVA_OPTS=""
CMD ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
