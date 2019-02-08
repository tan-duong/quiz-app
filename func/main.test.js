import {getQuizFromTrivia, shuffle, sortAnswer, secondsToHms} from './main'

test('get quiz return something', async () => {
    const questions = await getQuizFromTrivia()
    
    expect(questions).toBeDefined()
})

test('get quiz return array length 10', async () => {
    const questions = await getQuizFromTrivia()
    
    expect(questions).toHaveLength(10)
})

test('get quiz - object has correct properties', async () => {
    const questions = await getQuizFromTrivia()
    
    expect(questions[0]).toHaveProperty('id')
    expect(questions[0]).toHaveProperty('question')
    expect(questions[0]).toHaveProperty('type')
    expect(questions[0]).toHaveProperty('answers')
    expect(questions[0]).toHaveProperty('correct_answer')
})

test('shuffle', () => {
    const arr = [1,4,6,9]
    const ret = shuffle([...arr])
    expect(ret).not.toEqual(arr)
})

const answers = [
    "answer 1",
    "answer 2",
    "answer 3",
    "answer 4",
]

const true_false_arr = ["True", "False"]

test('sortAnswer - bolean type', () => {
    const ret = sortAnswer([...answers], "boolean")
    expect(ret).toEqual(true_false_arr)
})

test('sortAnswer - multiple type', () => {
    const ret = sortAnswer([...answers], "multiple")
    expect(ret).not.toEqual(answers) //there is a likelihood that the sort result equalized to ansers
})

test('sortAnswer - other type', () => {
    const ret = sortAnswer([...answers], "other")
    expect(ret).toEqual(answers)
})

test('secondsToHms', () => {
    const ret = secondsToHms(90)
    expect(ret).toBe("1:30")
})
