package ThreadsPrc2.src.main.java.org.example;

import java.math.BigInteger;

public class ThreadsPrc1 {
    public static void main(String[] args) {
        String str1 = "ZA";
        String str = str1.toLowerCase();
        BigInteger j = BigInteger.ONE;
        BigInteger addition = BigInteger.ZERO ;
        System.out.println("jay shree ram ");

        for(char i = 'a' ; i<='z' ; i++)// 26 times
        {
            BigInteger  b  = j.multiply(BigInteger.valueOf(1));
            for(int k = 0 ; k<str.length() ; k++) // string length times i.e 26*2
            {
                if(i==str.charAt(k))
                {
                    addition = b.add(addition);
                }
            }
            j=b.multiply(BigInteger.valueOf(10));

        }
        System.out.println(addition);
    }
}
