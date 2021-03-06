import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

// TODO use Proxy in environment: https://angular.io/guide/build#proxying-to-a-backend-server
const baseUrl = environment.mock ? 'http://localhost:3000' :'https://iota-api.thank-the-maker.org';

const options = {
    headers: {
        'x-api-key': 'CiZ9mapceb5pQXFsvNx1q4mHqYrZVWN8SScTzrzc'
    }
};

const optionsSeeds = {
    headers: {
        'x-api-key': 'Bo69eTy4Mt3FTTUoePaKH60tUozeXceoaQqXwYY3'
    }
};

@Injectable()
export class IotaApiService {
    constructor(private http: HttpClient) {
    }

    payThirdparty = address => this.http.post<any>(baseUrl + '/addresses' + '/' + address + '/paythirdparty', null, options);

    getNewAddress = () => this.http.post<any>(baseUrl + '/addresses', {seedId: 1}, options);

    getAddressInfo = address => this.http.get<any>(baseUrl + '/addresses' + '/' + address, options);

    getSeedInfo = seedId => this.http.get<any>(baseUrl + '/seeds' + '/' + seedId, optionsSeeds);

    updateSeedInfo = seedId => this.http.get<any>(baseUrl + '/seeds' + '/' + seedId + '/update', optionsSeeds);

    getNodeInfo = () => this.http.get<any>(baseUrl + '/nodes', options);

    getIotaFromEur = eurs => this.http.get<any>(baseUrl + '/market/price-conversion/EUR/' + eurs, options);

    getEurFromMIota = miota => this.http.get<any>(baseUrl + '/market/price-conversion/MIOTA/' + miota, options);

    getIotaQuotes = () => this.http.get<any>(baseUrl + '/market/iota/quotes', options);
}
