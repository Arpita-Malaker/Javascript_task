function generatePassword() {
    var password = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz'+'0123456789'+'!%&@#$';
      
    for (let i = 1; i <= 10; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
          
        password += str.charAt(char)
    }
      
    return password;
}

console.log(generatePassword())