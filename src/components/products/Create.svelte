<script lang="ts">
  let { productModel } = $props();
  let id = $props.id();
</script>

{#if productModel.createDialog}
  <div
    class="w-full text-black h-full fixed top-0 left-0 flex flex-col items-center bg-transparent justify-center backdrop-blur-xl"
  >
    <div class="bg-white rounded-md p-4 w-96">
      <form onsubmit={(e) => productModel.createProduct(e)}>
        <h2 class="text-lg font-bold">Crear Producto</h2>
        <hr />

        <div class="p-2 flex flex-col">
          <label for="name" class="block text-sm font-bold">Nombre:</label>
          <input
            class="border border-gray-400 rounded-md p-2"
            placeholder="Ingrese el nombre"
            type="text"
            id={`name-${id}`}
            name="name"
          />
        </div>
        <div class="p-2 flex flex-col">
          <label for="stock" class="block text-sm font-bold">Stock:</label>
          <input
            class="border border-gray-400 rounded-md p-2"
            placeholder="Ingrese el stock"
            type="number"
            id={`stock-${id}`}
            name="stock"
          />
        </div>
        <div class="p-2 flex flex-col">
  <label for="price" class="block text-sm font-bold">Precio:</label>
  <input
    class="border border-gray-400 rounded-md p-2"
    placeholder="Ingrese el precio"
    type="number"
    id={`price-${id}`}
    name="priceUnit"
  />
</div>

<div class="p-2 flex flex-col">
  <label for="category" class="block text-sm font-bold">
    Categoría:
  </label>

  <input
    class="border border-gray-400 rounded-md p-2"
    placeholder="Ingrese el ID de categoría"
    type="number"
    id={`category-${id}`}
    name="categoryId"
  />
</div>
        <div class="p-2 flex justify-end gap-2 mt-3">
                    <button
                        class="bg-red-400 text-white px-4 py-2 rounded-md"
                        onclick={() => (productModel.createDialog = false)}
                    >
                        Cancelar
                    </button>
                    <button
                        class="bg-blue-400 text-white px-4 py-2 rounded-md"
                        type="submit"
                    >
                        Guardar
                    </button>
                </div>
      </form>
    </div>
  </div>
{/if}
