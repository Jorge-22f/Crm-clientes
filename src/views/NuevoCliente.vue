<script setup>    
    import { FormKit } from '@formkit/vue';
    import { useRouter } from 'vue-router';
    import ClienteService from '@/services/ClienteService';
    import RouterLink from '../components/UI/Button.vue';
    import Heading from '@/components/UI/Heading.vue';

    const router = useRouter();

    defineProps({
        titulo:{
            type: String
        }
    })
    
    const handleSubmit= (data) => {
        data.estado = 1
        ClienteService.agregarCliente(data)
            .then(respuesta => {            
                console.log(respuesta)

                router.push({name: 'listado-clientes'})
            })
            .catch(error => console.log(error))
    }

</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="listado-clientes">Home</RouterLink>
        </div>

        <Heading>{{titulo}}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w2/3 py-20 px-6">
                <FormKit type="form" submit-label="Agregar cliente" incomplete-message="Rellene los campos obligatorios" @submit="handleSubmit">
                    <FormKit 
                        type="text"
                        label="Nombre"
                        name="nombre"
                        placeholder="Nombre de cliente"
                        help="Coloca el nombre del cliente que desea registrar"
                        validation="required"
                        :validation-messages="{required: 'El nombre del cliente es obligatorio'}"
                    /> <!-- validation-visibility: submit, blur (por defecto), live, help se usa para dar informacion al usuario -->
                    <FormKit 
                        type="text"
                        label="Apellido"
                        name="apellido"
                        placeholder="Apellido de cliente"                        
                        validation="required"
                        :validation-messages="{required: 'El apellido del cliente es obligatorio'}"
                    />
                    <FormKit 
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Email de cliente"                        
                        validation="required|email"
                        :validation-messages="{required: 'El Email del cliente es obligatorio', email: 'Ingrese un email valido'}"
                    />
                    <FormKit 
                        type="text"
                        label="Telefono"
                        name="telefono"
                        placeholder="Telefono: xxx-xxx-xxxx"                        
                        validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{matches: 'El formato no es valido'}"
                    />
                    <FormKit 
                        type="text"
                        label="Empresa"
                        name="empresa"
                        placeholder="Empresa cliente"                     
                        
                    />
                    <FormKit 
                        type="text"
                        label="Cargo"
                        name="cargo"
                        placeholder="Cargo cliente"                     
                        
                    />
                </FormKit> <!-- matches:/^$/ se hace una validacion personalizada, rule ins +(valida incluso si el campo esta solo) *(ejecuta si la validacion previa falla) ?(la regla es opcional)-->
            </div>
        </div>        
    </div>
</template>