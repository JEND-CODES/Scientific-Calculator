class Calculator {
    constructor() {
        this.area = $('#results');
        this.keys = $('.key');
        this.clear = $('.clear');
        this.equal = $('.equal');
        this.operation = $('.operation-btn');
        this.delete = $('.delete');
        this.compute();
    }

    compute() {

        this.keys.click((el) => {

            let valor = $(el.target).val();
            this.area.val(this.area.val() + valor);

        });

        this.clear.click(() => {

            this.area.val('');

        });

        this.equal.click(() => {

            this.area.val(eval(this.area.val()));

        });

        this.operation.click((el) => {

            let valor = $(el.target).val();

            switch (valor) {

                case "logx":

                    this.area.val(Math.log(this.area.val()));
                    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/log
                    // La fonction Math.log() renvoie le logarithme naturel (aussi appelé logarithme népérien) d'un nombre
                    // Dans le cas le plus simple, le logarithme compte le nombre d'occurrences du même facteur dans une multiplication répétée : par exemple, comme 1000 = 10×10×10 = 103, le logarithme en base 10 de 1000 est 3. 
                    break;

                case "exponential":
                    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/exp
                    // La fonction Math.exp() renvoie l'exponentielle d'un nombre
                    // En mathématiques, la fonction exponentielle est la fonction notée exp qui est égale à sa propre dérivée et prend la valeur 1 en 0.

                    this.area.val(Math.exp(this.area.val()));

                    break;

                case "power2":
                    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
                    // La fonction Math.pow() renvoie un nombre à une certaine puissance
                    // Par exemple 3 puissance 2 = 3 * 3 = 9.

                    this.area.val(Math.pow(this.area.val(), 2));

                    break;

                case "power3":
                    // Par exemple : 3 puissance 3 = 3 * 3 * 3 = 27.

                    this.area.val(Math.pow(this.area.val(), 3));

                    break;

                case "sqrt":
                    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
                    // La fonction Math.sqrt() renvoie la racine carrée d'un nombre
                    // Par exemple, pour 25 quelle est la racine carrée ? 
                    // On cherche le nombre qui, multiplié par lui-même, donne le résultat 25
                    // la racine carrée de 25 est 5 (5 x 5 = 25)
                    // la racine carrée de 16 est 4 (4 x 4 = 16)
                    // La racine carrée de 81 est 9 (9 x 9 = 81)

                    this.area.val(Math.sqrt(this.area.val()));

                    break;

                case "fact":

                    let x = this.area.val();

                    let y = 1;
                    for (var i = 1; i <= x; i++) {
                        y = y * i;
                    }

                    this.area.val(y);

                    break;

                case "sin":
                    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/sin
                    // La fonction Math.sin() renvoie le sinus d'un nombre.
                    // En géométrie, le sinus d'un angle dans un triangle rectangle est le rapport entre la longueur du côté opposé à cet angle et la longueur de l'hypoténuse.

                    this.area.val(Math.sin(this.area.val()));

                    break;

                case "asin":
                    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/asin
                    // La fonction Math.asin() renvoie l'arc sinus d'un nombre (en radians).

                    this.area.val(Math.asin(this.area.val()));

                    break;

                case "cos":
                    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/cos
                    // La fonction Math.cos() retourne le cosinus d'un angle dont la valeur est exprimée en radians
                    this.area.val(Math.cos(this.area.val()));

                    break;

                case "acos":
                    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/acos
                    // La fonction Math.acos() renvoie l'arc cosinus d'une valeur exprimée en radians.
                    this.area.val(Math.acos(this.area.val()));

                    break;

                case "tan":
                    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/tan
                    // La fonction Math.tan() renvoie la tangente d'un nombre exprimant un angle en radians.

                    this.area.val(Math.tan(this.area.val()));

                    break;

                case "atan":
                    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/atan
                    // La fonction Math.atan() renvoie l'arc tangente d'un nombre exprimée en radians. 

                    this.area.val(Math.atan(this.area.val()));

                    break;

            }

        });

        this.delete.click(() => {

            var deletion = this.area.val().length - 1;
            var afterDeletion = this.area.val().substring(0, deletion);
            this.area.val(afterDeletion);

        });

    };

};

// const calculator = new Calculator();
new Calculator();