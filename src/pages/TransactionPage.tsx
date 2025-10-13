import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import axios from 'axios';

const CATEGORIAS_VALIDAS = [
    "Supermercado",
    "Feira / Sacolão",
    "Padaria",
    "Prestação / Aluguel de imóvel",
    "Condomínio",
    "Consumo de água",
    "Energia",
    "Internet",
    "Móveis",
    "Matricula Escolar / Mensalidade",
    "Material Escolar",
    "Transporte Escolar",
    "Ração",
    "Banho / Tosa",
    "Veterinário",
    "Remédio",
    "Plano de Saúde",
    "Medicamentos",
    "Dentista",
    "Academia",
    "Suplementação",
    "Ônibus / Metrô",
    "Taxi",
    "Combustível",
    "Vestuário / Calçados / Acessórios",
    "Cabeleireiro / Manicure / Higiene Pessoal",
    "Presentes",
    "Pós-pago",
    "Emprestimo",
    "Mãe",
    "Celular",
    "Cinema / Teatro / Shows/Streaming",
    "Livros / Revistas",
    "Restaurante",
    "Viagens",
    "Games",
    "Seguros",
    "Investimentos 1",
    "Investimentos 2",
    "Imposto de Renda"
];

const FINANCIAL_CONTROL_URL = import.meta.env.VITE_FINANCIAL_CONTROL_API;

export default function TransactionPage() {
    const [form, setForm] = useState({
        category: '',
        value: 0,
        date: '',
        description: '',
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        try {
            const [year, month, day] = form.date.split('-');
            const payload = {
                ...form,
                value: Number(form.value),
                date: `${day}/${month}/${year}`
            };

            console.log(payload);
            console.log(FINANCIAL_CONTROL_URL);

            const response = await axios.post(FINANCIAL_CONTROL_URL, payload);
            console.log('Transação salva com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao salvar transação:', error);
        }
    }

    return (
        <main className="mx-auto max-w-4/5 w-150 h-screen flex justify-center items-center">
            <form
                className="p-8 rounded shadow-md flex flex-col gap-4 w-full max-w-md"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl font-bold mb-4">Cadastrar Transação</h1>
                <label >
                    Categoria
                    <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="border rounded h-9 w-full"
                        required
                    >
                        <option value="" disabled>Selecione uma categoria</option>
                        {CATEGORIAS_VALIDAS.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </label>
                <div className='flex justify-between gap-2'>
                    <label className='w-1/2'>
                        Valor
                        <Input
                            type="number"
                            name="value"
                            value={form.value}
                            onChange={handleChange}
                            className='w-full'
                            placeholder='R$'
                            required
                        />
                    </label>
                    <label className='w-1/2'>
                        <p>Data</p>
                        <Input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            className='w-full justify-center'
                            required
                        />
                    </label>
                </div>

                <label>
                    Descrição
                    <Input
                        type="text"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="border rounded px-2 py-1 w-full"
                        required
                    />
                </label>
                <Button
                    type="submit"
                >
                    Salvar
                </Button>
            </form>
        </main>
    );
}