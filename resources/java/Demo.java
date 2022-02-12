import java.util.ArrayList;
import java.util.List;

class Demo {

    public static void main(String[] args){
        
        List<String> listar = new ArrayList<>();

        listar.add("El");
        listar.add("curso");
        listar.add("de");
        listar.add("docker");
        listar.add("en");
        listar.add("Everis-NTTDATA");
        listar.add("es");
        listar.add("muy");
        listar.add("interesante.");

        for(String l: listar){
            System.out.print(l + " ");
        }

        System.out.println("");
    }
}