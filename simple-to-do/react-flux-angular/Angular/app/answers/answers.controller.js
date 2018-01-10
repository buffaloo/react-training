(function() {
    angular
        .module('Forum')
        .controller('AnswersController', AnswersController);

    AnswersController.$inject = ['AnswerService'];

    function AnswersController(AnswerService) {
        var vm = this;

        vm.answers = AnswerService.answerData;

        vm.newAnswerText = '';

        vm.markAsCorrect = function(id) {
            for (key in vm.answers) {
                vm.answers[key].correct = false;
            }

            vm.answers[id].correct = true;
        }

        vm.addAnswer = function() {
            vm.answers[Object.keys(vm.answers).length + 1] = {
                body: vm.newAnswerText,
                correct: false
            };
        }
    }
}());