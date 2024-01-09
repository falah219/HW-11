const app = require('../app')
const request = require('supertest');

describe('Todo Unit Test', () => {
    test('Add Todo Successfully', (done) => {
        const newTodo = {
            title: "Todo"
        }
        
        request(app)
            .post('/todo/add')
            .send(newTodo)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Todo created uhuyy')
                done()
            })
            .catch(done)
    })

    
    test('Get all list', (done) => {
        request(app)
            .get('/todo')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
            expect(response.body.data.length).toBe(3)
            done()
        }).catch(done)
    })
   
    test('Get Detail Todo', (done) => {
        request(app)
            .get(`/todo/1`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
              expect(response.body.data.title).toBe("Mandi")
              done()
        }).catch(done)
    })

    test('Edit Todo', (done) => {
        const id = 1
        const updatedTodo = {
            title: "Todo 1 Updated",
        }
        
        request(app)
            .put(`/todo/${id}`)
            .send(updatedTodo)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe('Todo updated uhuyy')
                expect(response.body.data).toHaveProperty('title', 'Todo 1 Updated')
                done()
            })
            .catch(done)
    })

    test('Delete Todo', (done) => {
        const id = 100

        request(app)
            .delete(`todo/${id}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe("Todo deleted uhuyy")
                done()
        })
        .catch(done)
    })
}) 