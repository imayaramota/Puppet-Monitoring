/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */
package com.mycompany.puppet.colector;

import java.util.List;
import java.util.Objects;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author gusta
 */
public class TelaDoUsuario extends javax.swing.JFrame {
    private Integer id;
    Connection config = new Connection();        
    JdbcTemplate template = new JdbcTemplate(config.getDataSource()); 
    DadosColetados dados = new DadosColetados();
    
    /**
     * Creates new form TelaDoUsuario
     */
    public TelaDoUsuario(Integer id) {
        initComponents();
        this.id = id;
        System.out.println(this.id);
        
    }

    public TelaDoUsuario() {
    }
    

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel2 = new javax.swing.JPanel();
        btnPararColeta = new javax.swing.JButton();
        lblStatusAtualizacao = new javax.swing.JLabel();
        lblTitulo = new javax.swing.JLabel();
        lblTitulo1 = new javax.swing.JLabel();
        btnAtualizarMaquina1 = new javax.swing.JButton();
        lblStatusColeta = new javax.swing.JLabel();
        lblPuppetColector = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel2.setBackground(new java.awt.Color(102, 0, 102));

        btnPararColeta.setBackground(new java.awt.Color(175, 0, 51));
        btnPararColeta.setFont(new java.awt.Font("sansserif", 1, 18)); // NOI18N
        btnPararColeta.setForeground(new java.awt.Color(255, 255, 255));
        btnPararColeta.setText("STOP");
        btnPararColeta.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnPararColetaActionPerformed(evt);
            }
        });

        lblStatusAtualizacao.setForeground(new java.awt.Color(255, 255, 255));
        lblStatusAtualizacao.setText("Esperando atualização");
        lblStatusAtualizacao.setToolTipText("");
        lblStatusAtualizacao.setHorizontalTextPosition(javax.swing.SwingConstants.CENTER);

        lblTitulo.setFont(new java.awt.Font("sansserif", 1, 24)); // NOI18N
        lblTitulo.setForeground(new java.awt.Color(255, 255, 255));
        lblTitulo.setText("Status de coleta:");

        lblTitulo1.setFont(new java.awt.Font("sansserif", 1, 24)); // NOI18N
        lblTitulo1.setForeground(new java.awt.Color(255, 255, 255));
        lblTitulo1.setText("Status de componentes:");

        btnAtualizarMaquina1.setBackground(new java.awt.Color(0, 0, 0));
        btnAtualizarMaquina1.setForeground(new java.awt.Color(255, 255, 255));
        btnAtualizarMaquina1.setText("Atualizar e Iniciar");
        btnAtualizarMaquina1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnAtualizarMaquina1ActionPerformed(evt);
            }
        });

        lblStatusColeta.setForeground(new java.awt.Color(255, 255, 255));
        lblStatusColeta.setText("Desativada");
        lblStatusColeta.setToolTipText("");
        lblStatusColeta.setHorizontalTextPosition(javax.swing.SwingConstants.CENTER);

        lblPuppetColector.setFont(new java.awt.Font("sansserif", 1, 48)); // NOI18N
        lblPuppetColector.setForeground(new java.awt.Color(255, 255, 255));
        lblPuppetColector.setText("PUPPET Colector");

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel2Layout.createSequentialGroup()
                .addGap(0, 134, Short.MAX_VALUE)
                .addComponent(lblPuppetColector)
                .addGap(126, 126, 126))
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addGap(20, 20, 20)
                        .addComponent(btnPararColeta, javax.swing.GroupLayout.PREFERRED_SIZE, 135, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addGap(230, 230, 230)
                        .addComponent(lblTitulo))
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addGap(188, 188, 188)
                        .addComponent(lblTitulo1))
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addGap(257, 257, 257)
                        .addComponent(lblStatusAtualizacao))
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addGap(289, 289, 289)
                        .addComponent(lblStatusColeta)))
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
            .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel2Layout.createSequentialGroup()
                    .addContainerGap(499, Short.MAX_VALUE)
                    .addComponent(btnAtualizarMaquina1, javax.swing.GroupLayout.PREFERRED_SIZE, 135, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGap(27, 27, 27)))
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel2Layout.createSequentialGroup()
                .addGap(19, 19, 19)
                .addComponent(lblPuppetColector)
                .addGap(70, 70, 70)
                .addComponent(lblTitulo1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(lblStatusAtualizacao, javax.swing.GroupLayout.PREFERRED_SIZE, 38, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(68, 68, 68)
                .addComponent(lblTitulo)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(lblStatusColeta, javax.swing.GroupLayout.PREFERRED_SIZE, 38, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 11, Short.MAX_VALUE)
                .addComponent(btnPararColeta, javax.swing.GroupLayout.PREFERRED_SIZE, 73, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(21, 21, 21))
            .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel2Layout.createSequentialGroup()
                    .addContainerGap(386, Short.MAX_VALUE)
                    .addComponent(btnAtualizarMaquina1, javax.swing.GroupLayout.PREFERRED_SIZE, 73, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGap(17, 17, 17)))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel2, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void btnPararColetaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnPararColetaActionPerformed
        // TODO add your handling code here:   
        dados.setIsColetaAtiva(false);
        
    }//GEN-LAST:event_btnPararColetaActionPerformed

    private void btnAtualizarMaquina1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnAtualizarMaquina1ActionPerformed
        // TODO add your handling code here:
        String queryVM = String.format
        ("select id, fkAdmin, hostName, userLogin, senha, ip, disco, ram, processador from maquinaVirtual where fkAdmin = %d;", this.id);
        List<MaquinaVirtual> vmLista = template.query(queryVM, new BeanPropertyRowMapper<>(MaquinaVirtual.class));
        
        if(vmLista.isEmpty()){  
            lblStatusAtualizacao.setText("Usuário não encontrado.");
        }
        else if (Objects.equals(vmLista.get(0).getFkAdmin(), this.id)){
                MaquinaVirtual mv = new MaquinaVirtual();             
                lblStatusAtualizacao.setText("Configurações de máquina atualizadas");
                lblStatusColeta.setText("Ativada.");
                dados.setIsColetaAtiva(true);
                mv.setId(vmLista.get(0).getId());
                mv.setFkAdmin(vmLista.get(0).getFkAdmin());
                mv.setId(vmLista.get(0).getId());
                mv.setUserLogin(vmLista.get(0).getUserLogin());
                mv.setSenha(vmLista.get(0).getSenha());   
                
                System.out.println(mv);
                mv.updateMaquina(); 
                System.out.println(mv);
                mv.updateTabela();
        } 
    }//GEN-LAST:event_btnAtualizarMaquina1ActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(TelaDoUsuario.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(TelaDoUsuario.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(TelaDoUsuario.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(TelaDoUsuario.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new TelaDoUsuario().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnAtualizarMaquina1;
    private javax.swing.JButton btnPararColeta;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JLabel lblPuppetColector;
    private javax.swing.JLabel lblStatusAtualizacao;
    private javax.swing.JLabel lblStatusColeta;
    private javax.swing.JLabel lblTitulo;
    private javax.swing.JLabel lblTitulo1;
    // End of variables declaration//GEN-END:variables
}
