"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableStudent = void 0;
const __1 = require("..");
exports.createTableStudent = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield __1.connection.raw(`
            CREATE TABLE students(
                id INT AUTO_INCREMENT NOT NULL,
                name VARCHAR(50) NOT NULL,
                email VARCHAR(50) NOT NULL UNIQUE,
                birth_date DATE NOT NULL,
                mission_id INT,
                PRIMARY KEY (id)
                FOREING KEY (mission_id) REFERENCES mission(id)
            );
        `);
        console.log("sucesso");
    }
    catch (_a) {
        console.log("erro");
    }
});
exports.createTableStudent();
//# sourceMappingURL=createTableStudent.js.map