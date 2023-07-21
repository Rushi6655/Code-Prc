package org.example;

public class Main {
    public static void main(String[] args) {
        Node nodeA=new Node("A");
        Node nodeB=new Node("B");
        Node nodeC=new Node("C");
        Node nodeD=new Node("D");
        Node nodeE=new Node("E");
        System.out.println(nodeA.addDestination(nodeB));
        System.out.println(nodeA.addDestination(nodeC));
        System.out.println(nodeB.addDestination(nodeD));
        System.out.println(nodeB.addDestination(nodeE));
        System.out.println(nodeD.addDestination(nodeA));
        System.out.println(nodeA.printGraph());
        System.out.println(nodeB.printGraph());
    }
}
