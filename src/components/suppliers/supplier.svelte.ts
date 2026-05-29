import { http } from "@core/http"

interface Supplier {
    id: number
    name: string
    email: string
    telefono: string
}

class SupplierModel {
    supplier = $state<Supplier | null>(null)
    suppliers = $state<Supplier[]>([])
    deleteDialog = $state(false);
    editDialog = $state(false);
    createDialog = $state(false);

    async getSuppliers() {
        this.suppliers = await http.get<Supplier[]>(`${import.meta.env.PUBLIC_API_URL}/suppliers`);
    }

    async deleteSupplier(id: number) {
        await http.delete<Supplier>(`${import.meta.env.PUBLIC_API_URL}/suppliers/${id}`);
        this.getSuppliers();
        this.deleteDialog = false;
    }

    async editSupplier(id: number, e: Event) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        await http.patch<Supplier>(`${import.meta.env.PUBLIC_API_URL}/suppliers/${id}`, data);
        this.getSuppliers();
        this.editDialog = false;
    }

    async createSupplier(e: Event) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData);
        await http.post<Supplier>(`${import.meta.env.PUBLIC_API_URL}/suppliers`, data);
        this.getSuppliers();
        this.createDialog = false;
    }

    showCreateModal() {
        this.supplier = null;
        this.createDialog = true;
    }

    showEditModal(supplier: Supplier) {
        this.supplier = supplier;
        this.editDialog = true;
    }

    showDeleteModal(supplier: Supplier) {
        this.supplier = supplier;
        this.deleteDialog = true;
    }
}

export const supplierModel = new SupplierModel();
