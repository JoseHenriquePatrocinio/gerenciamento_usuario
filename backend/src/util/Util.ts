import moment from 'moment-timezone';

export default {
    getCurrentDateTime(): string {
        const dataHora = moment().tz('America/Sao_Paulo');
        return dataHora.format();
    }
}