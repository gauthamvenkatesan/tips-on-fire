import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
import com.github.gradle.node.npm.task.NpmTask

plugins {
	id("org.springframework.boot") version "3.0.6" // Update Spring Boot version to 3.0.6
	id("io.spring.dependency-management") version "1.1.0" // Update dependency management version
	kotlin("jvm") version "1.8.21" // Update Kotlin version to 1.8.21
	kotlin("plugin.spring") version "1.8.21" // Update Kotlin Spring plugin version
	id("com.github.node-gradle.node") version "3.5.1" // Update Node Gradle plugin version
}

group = "com.web"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_17 // Update Java source compatibility to 17

repositories {
	mavenCentral() // Use mavenCentral() instead of jcenter()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("org.springframework.boot:spring-boot-starter-data-jpa") // Add JPA dependency
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin") // Add Jackson Kotlin module
	developmentOnly("org.springframework.boot:spring-boot-devtools") // Change compileOnly to developmentOnly
	implementation("com.google.code.gson:gson")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	runtimeOnly("com.mysql:mysql-connector-j")
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "17"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}

tasks.register<NpmTask>("installDependencies") {
	workingDir.set(file("${project.rootDir}/client")) // Set the working directory for npm install
	args.set(listOf("install")) // Run npm install
}

tasks.register<NpmTask>("buildReact") {
	dependsOn("installDependencies") // Depend on installDependencies task
	workingDir.set(file("${project.rootDir}/client")) // Set the working directory for npm run build
	args.set(listOf("run", "build")) // Run npm run build
}

tasks.register<Copy>("copyReactBuild") {
	dependsOn("buildReact") // Depend on buildReact task
	from("${project.rootDir}/client/build") // Copy from the React build output directory
	into("${project.buildDir}/resources/main/static") // Copy to the Spring Boot static resources directory
}

tasks.named("build") {
	dependsOn("copyReactBuild") // Make the build task depend on copyReactBuild
}

defaultTasks("build")