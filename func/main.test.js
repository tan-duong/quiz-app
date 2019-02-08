import {getQuizFromTrivia} from './main'

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
    
    expect(questions[0]).toHaveProperty('question')
    expect(questions[0]).toHaveProperty('type')
    expect(questions[0]).toHaveProperty('incorrect_answers')
    expect(questions[0]).toHaveProperty('correct_answer')
})