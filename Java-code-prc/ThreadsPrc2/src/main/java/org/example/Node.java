package org.example;

import java.util.ArrayList;
import java.util.List;

public class Node {
    private String value;
    private List<Node> destinations=new ArrayList<>();
    public Node(String value) {
        this.value = value;
    }
    public boolean addDestination(Node destination){
        if((this.destinations.stream()
                .filter(node->node.getValue().equals(destination.getValue()))
                .findAny()
                .orElse(null))==null){
            this.destinations.add(destination);
            return true;
        }else {
            return false;
        }
    }
    //getters and setters
    public void setValue(String value) {
        this.value = value;
    }
    public void setDestinations(List<Node> destinations) {
        this.destinations = destinations;
    }
    public String getValue() {
        return value;
    }
    public List<Node> getDestinations() {
        return destinations;
    }

    public String printGraph(){
        return "Head : "+this.value+" :\n"
                +this.destinations
                +"\n";
    }

    @Override
    public String toString() {
        StringBuilder result=new StringBuilder();
        result.append("\n Node "+this.value+" : {\n");
        for (Node node : this.destinations) {
            if(this.value!=node.value){
                result.append("\t"+this.value+" -> "+node.value+"\n");
            }
        }
        result.append(" } \n");
        return result.toString();
    }
}
