const express = require('express')
const articleRouter = require('./routes/article.routes')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [
        {
            title: 'Test article',
            createdAt: new Date(),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam natus tempore quia quis ab repudiandae praesentium saepe. Cupiditate autem tempora nostrum aliquid? Odio saepe ex officia tempore laboriosam adipisci iure eum temporibus facere, consectetur sit iusto exercitationem? Corporis vel sequi dolorem placeat excepturi laudantium natus doloribus! Ad, molestiae blanditiis!'
        },
        {
            title: 'Test article 2',
            createdAt: new Date(),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae numquam, aliquid tempore voluptate nihil, excepturi repellendus cupiditate ex fugit, quos necessitatibus hic. Impedit delectus, repellat dicta aperiam accusamus nisi eos? Recusandae, illum asperiores aspernatur ipsam tenetur architecto voluptates. Amet deserunt iste sint eveniet nobis sit aliquid quo enim magnam iure.'
        }
    ]

    res.render('index', { articles: articles })
})

app.listen(5000)