/// <reference path="form-namespace.ts" />
namespace Form {
    class MyForm {
        private type: FormType = 'inline'
        private state: FormState = 'active'

        constructor(public email: string) {}

        getInfo(): FormInfo {
            return {
                type: this.type,
                state: this.state
            }
        }
    }

    export const myForm = new MyForm('v@mail.ru')
}

class OurForm {
    private type: Form.FormType = 'inline'
    private state: Form.FormState = 'active'

    constructor(public email: string) {}

    getInfo(): Form.FormInfo {
        return {
            type: this.type,
            state: this.state
        }
    }
}

console.log(new OurForm('w@gmail.com')/*.getInfo()*/)
console.log(Form.myForm/*.getInfo()*/)