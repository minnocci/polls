import React from 'react'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function Question(props) {

  const { question, published_at, choices } = props.question
  
  return (
    <Card className='question'>
      <CardHeader
        className='question-header'
        title={question}
      />
      <CardContent>
        <Typography>
          Published at {published_at}
        </Typography>
        <Typography>
          {choices.length} choices
        </Typography>
      </CardContent>
    </Card>
  )

}