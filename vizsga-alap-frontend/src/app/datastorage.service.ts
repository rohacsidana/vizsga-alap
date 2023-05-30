import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatastorageService {
  constructor(private http: HttpClient) {}

  /*fetchIngatlanok() {
    this.http
      .get<
        {
          id: number;
          kategoria: number;
          leiras: string;
          hirdetesDatuma: Date;
          tehermentes: boolean;
          ar: number;
          kepUrl: number;
          kat: {
            id: number;
            nev: string;
          };
        }[]
      >(URL + 'ingatlan')
      .pipe(
        map((ingatlanok) => {
          const ingatlanData = ingatlanok.map((ingatlan) => {
            const sor: Ingatlan = {
              id: ingatlan.id,
              kategoria: ingatlan.kategoria,
              leiras: ingatlan.leiras,
              hirdetesDatuma: ingatlan.hirdetesDatuma,
              tehermentes: ingatlan.tehermentes,
              ar: ingatlan.ar,
              kepUrl: ingatlan.kepUrl,
              kat: {
                id: ingatlan.kat.id,
                nev: ingatlan.kat.nev,
              },
            };
            return { ...sor };
          });
          return ingatlanData;
        }),
        tap({
          next: (data) => {
            this.ingatlanService.setIngatlanok(data.slice());
          },
          error: (error) => console.log(error),
        })
      )
      .subscribe();
  }

  newIngatlan(ingatlan: Ingatlan) {
    return this.http
      .post<any>(URL + 'ingatlan', {
        kategoria: ingatlan.kategoria,
        leiras: ingatlan.leiras,
        hirdetesDatuma: ingatlan.hirdetesDatuma,
        tehermentes: ingatlan.tehermentes,
        ar: ingatlan.ar,
        kepUrl: ingatlan.kepUrl,
      })
      .pipe(
        tap({
          next: (res) => {
            if (res) {
              this.fetchIngatlanok();
              console.log(res);
            }
          },
          error: (error) => {
            console.log(error);
          },
        })
      )
      .subscribe();
  }

  updateSzakdoga(szakdoga: Szakdoga) {
    return this.http
      .put<number>(URL + 'szakdoga/' + szakdoga.id, {
        szakdogaNev: szakdoga.szakdogaNev,
        githublink: szakdoga.githublink,
        oldallink: szakdoga.oldallink,
        tagokneve: szakdoga.tagokneve,
      })
      .pipe(
        tap({
          next: (res) => {
            this.szakdogaService.updateSzakdoga(szakdoga);
          },
          error: (error) => {
            console.log(error);
          },
        })
      )
      .subscribe();
  }

  deleteSzakdoga(id: number) {
    console.log(URL + 'szakdoga/' + id);

    return this.http
      .delete<any>(URL + 'szakdoga/' + id)
      .pipe(
        tap({
          next: (res) => {
            //console.log('delete response: ' + res);
            this.szakdogaService.deleteSzakdoga(id);
          },
          error: (error) => {
            console.log(error);
          },
        })
      )
      .subscribe();
  }
  */
}
//export const URL = 'https://localhost:7233/api/';
