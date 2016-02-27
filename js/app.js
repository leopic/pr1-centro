angular.module('proyectoUno', [])
    .service('MarcadorService', function() {
        var llave = 'marcador';

        var obtener = function() {
            return JSON.parse(localStorage.getItem(llave));
        };

        var guardar = function(nombreUno, marcadorUno,  nombreDos, marcadorDos) {
            var marcador = {};
            marcador[nombreUno] = marcadorUno;
            marcador[nombreDos] = marcadorDos;
            localStorage.setItem(llave, JSON.stringify(marcador));
        };

        return {
            guardar: guardar,
            obtener: obtener
        };
    })
    .controller('ProyectoUnoController',
        ['$scope', 'MarcadorService', function ($scope, MarcadorService) {
            $scope.init = function() {
                $scope.saludo = 'Hola Mundo!';
                $scope.marcador = MarcadorService.obtener();
            };

            $scope.init();
        }])
    .controller('EditarMarcadorController', [
        '$scope', 'MarcadorService', function($scope, MarcadorService) {

            $scope.init = function() {
                $scope.equipoUno = null;
                $scope.equipoDos = null;
            };

            $scope.cambiarNombresEquipos = function() {
                MarcadorService.guardar(
                    $scope.equipoUno,
                    $scope.equipoUnoMarcador,
                    $scope.equipoDos,
                    $scope.equipoDosMarcador
                );
            };

            $scope.init();
        }
    ])
;
