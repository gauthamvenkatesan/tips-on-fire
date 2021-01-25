import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.4.1"
	id("io.spring.dependency-management") version "1.0.10.RELEASE"
	id("com.github.node-gradle.node") version "2.2.4"
	id("com.moowork.node") version "1.3.1"
	war
	kotlin("jvm") version "1.4.21"
	kotlin("plugin.spring") version "1.4.21"
}

group = "com.browseronly"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_11

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-web")
	compileOnly("org.springframework.boot:spring-boot-devtools")
    implementation("com.google.code.gson:gson")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	providedRuntime("org.springframework.boot:spring-boot-starter-tomcat")
	testImplementation("org.springframework.boot:spring-boot-starter-test")

}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "11"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}

// UI NPM Tasks

// Task for installing frontend dependencies in web
val installDependencies by tasks.registering(com.moowork.gradle.node.npm.NpmTask::class) {
	setArgs(listOf("install"))
	setExecOverrides(closureOf<ExecSpec> {
		setWorkingDir("client")
	})
}

// Task for executing build:gradle in web
val buildWeb by tasks.registering(com.moowork.gradle.node.npm.NpmTask::class) {
	// Before buildWeb can run, installDependencies must run
	dependsOn(installDependencies)
	setArgs(listOf("run", "build"))
	setExecOverrides(closureOf<ExecSpec> {
		setWorkingDir("client")
	})
}

tasks.create("copyWebPackage"){
	dependsOn(buildWeb)
	copy {
		from("${project.projectDir}/client/build/")
		into("build/resources/main/static/")
	}
}

defaultTasks("build")

tasks.build {
	dependsOn("copyWebPackage")
}