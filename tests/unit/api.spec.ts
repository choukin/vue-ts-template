import { expect } from 'chai';
import API from '@/common/api/index'


describe('fetch Token', () => {
    before((done) => {
        done()
    })

    it('gittoken', (done) => {
        API.fetchToken().then( (response) => {
          console.log(response)
          done()
        }).catch((error) => {
            console.log('error')
            console.log(error)
            done()
        })
    });
})

