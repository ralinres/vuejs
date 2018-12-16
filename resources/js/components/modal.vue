<template>
<div>



</div>

</template>

<script>
    import Vue from 'vue'
    import Spinner from 'vue-spinkit'
    import {EventBus} from '../eventBus'
    let wrapper = document.createElement('div');

    let full = Vue.extend({

        template: `
  	          <div class="progress">
                    <div class="indeterminate"></div>
                </div>`,
        components: {'Spinner': Spinner}
    })

    let component = new full().$mount(wrapper)


    export default {
        name: "modal",
        props:['showmodal','titleModal','errorModal'],

        methods: {
            alert() {
                this.$swal({

                    content: component.$el,
                    text: this.titleModal,
                    icon: "warning", /*puede ser la url*/
                    buttons: false,
                    dangerMode: true,


                })
            },
            error(){

                this.$swal({

                    title: 'Error in api response',
                    icon: "error", /*puede ser la url*/
                    buttons: [true,"Reintent"],
                    dangerMode: true,


                }).then((value) => {

                     if(value){

                      this.EmitirReitentApi()

                     }
                     else{

                     this.$swal.close();

                     }

                });

            },

            EmitirReitentApi(){

                EventBus.$emit('reintent-api')

            },
        },

        created(){

           if(this.showmodal){

               this.alert()

           }

        },
        watch: {

            showmodal : function(val, oldVal) {

                     if(val){

                         this.alert()

                     }
                     else{

                         this.$swal.close();

                     }
            },
            errorModal : function(val, oldVal) {

                     if(val){

                         this.$swal.close();
                         this.error()

                     }

            }
        },
    }
</script>

<style scoped>


</style>