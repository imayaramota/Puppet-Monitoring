package com.mycompany.puppet.colector;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;

public class Identificador {
    private FileOutputStream arquivoEscrita;
    private FileInputStream arquivoLeitura;
    private InputStreamReader leitorDeArquivo;

    public Identificador() {
        try{
            this.arquivoEscrita = new FileOutputStream("identificador.txt");
            this.arquivoLeitura = new FileInputStream("identificador.txt");
            this.leitorDeArquivo = new InputStreamReader(arquivoLeitura);
        }
        catch(Exception e){
            System.out.println("Ocorreu um erro ao tentar identificar a máquina.");
        }
        
    }
    
    
}
