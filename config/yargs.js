const argv = require('yargs')
                .command('crear','crear elemento',{

                    descripcion:{
                        demand:true,
                        alias:'d',
                        desc:'Descripcion de la tarea'
                    }
                })
                .command('actualizar','actualizar elemento',{

                    descripcion:{
                        demand:true,
                        alias:'d',
                        desc:'Descripcion de la tarea'
                    },
                    descripcion:{
                        alias:'c',
                        desc:'Descripcion alt'
                    }

                })
                .help()
                .argv;

module.exports={
    argv
}