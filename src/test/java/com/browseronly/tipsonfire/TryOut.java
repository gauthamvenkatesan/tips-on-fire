/*
 * Copyright (c) 2021 tipsonfire.com | Terms of Service | Privacy Policy
 */

package com.browseronly.tipsonfire;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

//interface  BaseI { void method();}


public class TryOut {

    public static boolean compareACBD(String input){
        Map<Character,Integer> resultMap = new HashMap<>();
        resultMap = input.chars().mapToObj(o -> (char) o).peek(System.out::print).collect(Collectors.toMap(c -> c,c -> 1,(k,s) -> k + 1));
        System.out.println(resultMap);
        return resultMap.get('a').equals(resultMap.get('c')) && resultMap.get('b').equals(resultMap.get('d')) ;
    }
    public int minimumMoves(List<Integer> intarr1, List<Integer> intarr2){
        int minimumMoves = 0;
        String str1 = intarr1.stream().map(p -> p.toString()).reduce("",(simpleStr, str) -> simpleStr.concat(str));
        String str2 = intarr2.stream().map(p -> p.toString()).reduce("",(simpleStr, str) -> simpleStr.concat(str));
        AtomicInteger count = new AtomicInteger();
        for(char o : str1.toCharArray()) {
            int s1 = Character.getNumericValue(o);
            int s2 = Character.getNumericValue(str2.charAt(count.getAndIncrement()));
            if (s1 >= s2) {
                minimumMoves = minimumMoves + (s1 - s2);
            } else {
                minimumMoves = minimumMoves + (s2 - s1);
            }
            System.out.println("s1 " +s1+" s2 "+s2);
            System.out.println("minimumMoves " +minimumMoves);
        }
       System.out.println(minimumMoves);
        return minimumMoves;
    }

    public static  void main (String args[]){
        int i = 010;
        int j = 07;
        System.out.println(i);
        System.out.println(j);
    }
}
