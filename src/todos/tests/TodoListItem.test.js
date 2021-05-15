import { expect } from 'chai'
import { getBorderStyle } from '../TodoListItem'

describe('The getBorderStyle for a date', () => {
    it('Returns none when the date is lesser than 3 hours ago', () => {
        const fakeCreatedAt = new Date(Date.now() - 3600000*10)
        const expected = 'none'
        const actual = getBorderStyle(fakeCreatedAt, Date.now())

        expect(actual).to.deep.equal(expected)
    })

    it('Returns \"2px solid red\" when the date is greater than 3 hours ago', () => {
        const fakeCreatedAt = new Date(Date.now() - 3600000*2)
        const expected = '2px solid red'
        const actual = getBorderStyle(fakeCreatedAt, Date.now())

        expect(actual).to.deep.equal(expected)
    })
})
