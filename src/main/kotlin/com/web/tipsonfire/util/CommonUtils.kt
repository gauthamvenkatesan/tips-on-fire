/*
 * Copyright (c) 2021 tipsonfire.com | Terms of Service | Privacy Policy
 */

package com.web.tipsonfire.util

import com.google.gson.Gson
import com.google.gson.JsonArray
import com.google.gson.stream.JsonReader
import java.io.File
import java.io.FileReader
import java.io.IOException

fun getJsonDataFromAsset(fileName: String): String? {
    val gson:Gson = Gson()
    val courseJsonString:String
    try {
        println("getJsonDataFromAsset fileName : $fileName")
        val reader = JsonReader(FileReader(File("src/assets/$fileName")))
        val data: JsonArray = gson.fromJson(reader, JsonArray::class.java)
        courseJsonString = data.toString();
        println("getJsonDataFromAsset is a success ")
    } catch (e: Exception) {
            e.printStackTrace();
        return null
    }
    return courseJsonString
}

