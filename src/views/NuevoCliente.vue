<script setup>
    import { FormKit } from '@formkit/vue';
    import RouterLink from '../components/UI/Button.vue';
    import Heading from '@/components/UI/Heading.vue';

    defineProps({
        titulo:{
            type: String
        }
    })
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="listado-clientes">Home</RouterLink>
        </div>

        <Heading>{{titulo}}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w2/3 py-20 px-6">
                <FormKit type="form" submit-label="Agregar cliente" incomplete-message="Rellene los campos obligatorios">
                    <FormKit 
                        type="text"
                        label="Nombre"
                        placeholder="Nombre de cliente"
                        help="Coloca el nombre del cliente que desea registrar"
                        validation="required"
                        :validation-messages="{required: 'El nombre del cliente es obligatorio'}"
                    /> <!-- validation-visibility: submit, blur (por defecto), live, help se usa para dar informacion al usuario -->
                    <FormKit 
                        type="text"
                        label="Apellido"
                        placeholder="Apellido de cliente"                        
                        validation="required"
                        :validation-messages="{required: 'El apellido del cliente es obligatorio'}"
                    />
                    <FormKit 
                        type="email"
                        label="Email"
                        placeholder="Email de cliente"                        
                        validation="required|email"
                        :validation-messages="{required: 'El Email del cliente es obligatorio', email: 'Ingrese un email valido'}"
                    />
                    <FormKit 
                        type="text"
                        label="Telefono"
                        placeholder="Telefono: xxx-xxx-xxxx"                        
                        validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{matches: 'El formato no es valido'}"
                    />
                    <FormKit 
                        type="text"
                        label="Empresa"
                        placeholder="Empresa cliente"                     
                        
                    />
                    <FormKit 
                        type="text"
                        label="Cargo"
                        placeholder="Cargo cliente"                     
                        
                    />
                </FormKit> <!-- matches:/^$/ se hace una validacion personalizada, rule ins +(valida incluso si el campo esta solo) *(ejecuta si la validacion previa falla) ?(la regla es opcional)-->
            </div>
        </div>        
    </div>
</template>