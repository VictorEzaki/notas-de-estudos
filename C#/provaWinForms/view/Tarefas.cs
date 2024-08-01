using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Controller;
using Model;

namespace Views;

public class ViewTarefas : Form
{
    private readonly Label LblTarefa;
    private readonly Label LblData;
    private readonly Label LblHora;
    private readonly TextBox InpTarefa;
    private readonly TextBox InpData;
    private readonly TextBox InpHora;
    private readonly Button BtnCadastrar;
    private readonly Button BtnAlterar;
    private readonly Button BtnDeletar;
    private readonly Button BtnStatus;
    private readonly DataGridView DGVTarefas;
    private readonly Panel PnlFicha;
    private readonly Panel PnlDgv;
    private readonly ComboBox CbPessoas;

    public ViewTarefas()
    {
        List<Tarefas> tarefas = ControllerTarefas.ListarTarefas();
        ControllerTarefas.Sincronizar();

        LblTarefa = new Label();
        BtnDeletar = new Button();
        PnlFicha = new Panel();
        PnlDgv = new Panel();
        InpTarefa = new TextBox();
        LblData = new Label();
        InpData = new TextBox();
        LblHora = new Label();
        InpHora = new TextBox();
        BtnAlterar = new Button();
        BtnCadastrar = new Button();
        BtnStatus = new Button();
        CbPessoas = new ComboBox();
        DGVTarefas = new DataGridView();
        PnlFicha.SuspendLayout();
        PnlDgv.SuspendLayout();
        ((System.ComponentModel.ISupportInitialize)DGVTarefas).BeginInit();
        SuspendLayout();
        //
        // CbPessoas
        //
        CbPessoas.Size = new Size(200, 20);
        CbPessoas.Location = new Point(0, 50);
        CbPessoas.Name = "CbPessoas";
        Controls.Add(CbPessoas);
        // 
        // LblTarefa
        // 
        LblTarefa.Anchor = AnchorStyles.None;
        LblTarefa.AutoSize = true;
        LblTarefa.Location = new Point(336, 21);
        LblTarefa.Name = "LblTarefa";
        LblTarefa.Size = new Size(41, 15);
        LblTarefa.TabIndex = 0;
        LblTarefa.Text = "Tarefa:";
        // 
        // BtnDeletar
        // 
        BtnDeletar.Anchor = AnchorStyles.None;
        BtnDeletar.Location = new Point(302, 162);
        BtnDeletar.Name = "BtnDeletar";
        BtnDeletar.Size = new Size(75, 23);
        BtnDeletar.TabIndex = 1;
        BtnDeletar.Text = "Deletar";
        BtnDeletar.UseVisualStyleBackColor = true;
        BtnDeletar.Click += ClickDeletar;
        // 
        // PnlFicha
        // 
        PnlFicha.Controls.Add(InpHora);
        PnlFicha.Controls.Add(LblHora);
        PnlFicha.Controls.Add(InpData);
        PnlFicha.Controls.Add(LblData);
        PnlFicha.Controls.Add(InpTarefa);
        PnlFicha.Controls.Add(LblTarefa);
        PnlFicha.Controls.Add(BtnStatus);
        PnlFicha.Controls.Add(BtnCadastrar);
        PnlFicha.Controls.Add(BtnAlterar);
        PnlFicha.Controls.Add(BtnDeletar);
        PnlFicha.Dock = DockStyle.Top;
        PnlFicha.Location = new Point(0, 0);
        PnlFicha.Name = "PnlFicha";
        PnlFicha.Size = new Size(841, 207);
        PnlFicha.TabIndex = 2;
        // 
        // PnlDgv
        // 
        PnlDgv.Controls.Add(DGVTarefas);
        PnlDgv.Dock = DockStyle.Fill;
        PnlDgv.Location = new Point(0, 207);
        PnlDgv.Name = "PnlDgv";
        PnlDgv.Size = new Size(841, 342);
        PnlDgv.TabIndex = 2;
        // 
        // InpTarefa
        // 
        InpTarefa.Anchor = AnchorStyles.None;
        InpTarefa.Location = new Point(336, 39);
        InpTarefa.Name = "InpTarefa";
        InpTarefa.Size = new Size(173, 23);
        InpTarefa.TabIndex = 2;
        // 
        // LblData
        // 
        LblData.Anchor = AnchorStyles.None;
        LblData.AutoSize = true;
        LblData.Location = new Point(336, 66);
        LblData.Name = "LblData";
        LblData.Size = new Size(115, 15);
        LblData.TabIndex = 0;
        LblData.Text = "Data: (yyyy-mm-dd)";
        // 
        // InpData
        // 
        InpData.Anchor = AnchorStyles.None;
        InpData.Location = new Point(336, 84);
        InpData.Name = "InpData";
        InpData.Size = new Size(173, 23);
        InpData.TabIndex = 2;
        // 
        // LblHora
        // 
        LblHora.Anchor = AnchorStyles.None;
        LblHora.AutoSize = true;
        LblHora.Location = new Point(336, 115);
        LblHora.Name = "LblHora";
        LblHora.Size = new Size(86, 15);
        LblHora.TabIndex = 0;
        LblHora.Text = "Hora: (hh:mm)";
        // 
        // InpHora
        // 
        InpHora.Anchor = AnchorStyles.None;
        InpHora.Location = new Point(336, 133);
        InpHora.Name = "InpHora";
        InpHora.Size = new Size(173, 23);
        InpHora.TabIndex = 2;
        // 
        // BtnAlterar
        // 
        BtnAlterar.Anchor = AnchorStyles.None;
        BtnAlterar.Location = new Point(383, 162);
        BtnAlterar.Name = "BtnAlterar";
        BtnAlterar.Size = new Size(75, 23);
        BtnAlterar.TabIndex = 1;
        BtnAlterar.Text = "Alterar";
        BtnAlterar.UseVisualStyleBackColor = true;
        BtnAlterar.Click += ClickAlterar;
        // 
        // BtnCadastrar
        // 
        BtnCadastrar.Anchor = AnchorStyles.None;
        BtnCadastrar.Location = new Point(464, 162);
        BtnCadastrar.Name = "BtnCadastrar";
        BtnCadastrar.Size = new Size(75, 23);
        BtnCadastrar.TabIndex = 1;
        BtnCadastrar.Text = "Cadastrar";
        BtnCadastrar.UseVisualStyleBackColor = true;
        BtnCadastrar.Click += ClickCadastrar;
        // 
        // BtnStatus
        // 
        BtnStatus.Anchor = AnchorStyles.None;
        BtnStatus.Location = new Point(696, 178);
        BtnStatus.Name = "BtnStatus";
        BtnStatus.Size = new Size(104, 23);
        BtnStatus.TabIndex = 1;
        BtnStatus.Text = "Alterar Status";
        BtnStatus.UseVisualStyleBackColor = true;
        BtnStatus.Click += ClickStatus;
        // 
        // DGVTarefas
        // 
        DGVTarefas.AllowUserToOrderColumns = true;
        DGVTarefas.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
        DGVTarefas.Dock = DockStyle.Fill;
        DGVTarefas.Location = new Point(0, 0);
        DGVTarefas.Name = "DGVTarefas";
        DGVTarefas.Size = new Size(841, 342);
        DGVTarefas.TabIndex = 3;
        // 
        // Form2
        // 
        AutoScaleDimensions = new SizeF(7F, 15F);
        AutoScaleMode = AutoScaleMode.Font;
        ClientSize = new Size(841, 549);
        Controls.Add(PnlDgv);
        Controls.Add(PnlFicha);
        PnlFicha.ResumeLayout(false);
        PnlFicha.PerformLayout();
        PnlDgv.ResumeLayout(false);
        ((System.ComponentModel.ISupportInitialize)DGVTarefas).EndInit();
        ResumeLayout(false);
        if (tarefas.Count > 0)
        {           
            Listar();
        }
    }

    private void Listar()
    {

        List<Tarefas> tarefas = ControllerTarefas.ListarTarefas();

        DGVTarefas.Columns.Clear();
        DGVTarefas.AutoGenerateColumns = false;
        DGVTarefas.DataSource = tarefas;

        for (int i = 0; i < tarefas.Count; i++)
        {
            CbPessoas.DisplayMember = "";
        }

        for (int i = 0; i < tarefas.Count; i++)
        {
            CbPessoas.Items.Add(tarefas[i].Tarefa);
        }

        DGVTarefas.Columns.Add(new DataGridViewTextBoxColumn
        {
            HeaderText = "Id",
            DataPropertyName = "Id"
        });

        DGVTarefas.Columns.Add(new DataGridViewTextBoxColumn
        {
            HeaderText = "Tarefa",
            DataPropertyName = "Tarefa"
        });

        DGVTarefas.Columns.Add(new DataGridViewTextBoxColumn
        {
            HeaderText = "Data",
            DataPropertyName = "Data"
        });

        DGVTarefas.Columns.Add(new DataGridViewTextBoxColumn
        {
            HeaderText = "Hora",
            DataPropertyName = "Hora"
        });

        DGVTarefas.Columns.Add(new DataGridViewTextBoxColumn
        {
            HeaderText = "Status",
            DataPropertyName = "Situacao"
        });

        foreach (DataGridViewColumn column in DGVTarefas.Columns)
        {
            if (column.DataPropertyName == "Id")
                column.Width = this.ClientSize.Width / 8;
            column.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            if (column.DataPropertyName == "Tarefa")
                column.Width = this.ClientSize.Width / 4;
            column.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            if (column.DataPropertyName == "Data")
                column.Width = this.ClientSize.Width / 4;
            column.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            if (column.DataPropertyName == "Hora")
                column.Width = this.ClientSize.Width / 8;
            column.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            if (column.DataPropertyName == "Situacao")
                column.Width = this.ClientSize.Width / 4;
            column.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
        }
    }

    private void ClickCadastrar(object? sender, EventArgs e)
    {
        if (InpTarefa.Text == "" || InpData.Text == "" || InpHora.Text == "")
        {
            MessageBox.Show("Preencha todos os campos!");
        }
        else
        {
            bool situacao = false;
            ControllerTarefas.Cadastrar(InpTarefa.Text, InpData.Text, InpHora.Text, situacao);
            InpTarefa.Text = "";
            InpData.Text = "";
            InpHora.Text = "";
        }

        Listar();
    }

    private void ClickAlterar(object? sender, EventArgs e)
    {
        int indice = DGVTarefas.SelectedRows[0].Index;

        if (InpTarefa.Text == "" || InpData.Text == "" || InpHora.Text == "")
        {
            MessageBox.Show("Preencha todos os campos!");
        }
        else
        {
            ControllerTarefas.AlterarTarefa(InpTarefa.Text, InpData.Text, InpHora.Text, indice);
            InpTarefa.Text = "";
            InpData.Text = "";
            InpHora.Text = "";
        }

        Listar();
    }

    private void ClickDeletar(object? sender, EventArgs e)
    {
        int indice = DGVTarefas.SelectedRows[0].Index;

        ControllerTarefas.DeletarTarefa(indice);

        Listar();
    }

    private void ClickStatus(object? sender, EventArgs e)
    {
        int indice = DGVTarefas.SelectedRows[0].Index;

        ControllerTarefas.AlterarStatus(indice);

        Listar();
    }
}
