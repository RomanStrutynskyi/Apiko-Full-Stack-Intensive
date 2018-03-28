import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap-grid.css'
import questionList from 'questionList.json';

import { QuastionItem, Link, Heading,  Button } from 'components'
const Grid = styled.div`
  display: inline-flex;
  flex-direction: column;
  width:100%;
`

const StyledHeading = styled(Heading) `
  text-align: center;
  padding-bottom:25px;
`



const StyledQuastion = styled(QuastionItem) `
  margin-bottom:20px;
  padding:15px;

`
class QuastionList extends React.Component {
  constructor() {
    super();
    this.state = { counter: 10, questions: questionList, limit: 10 , disabled: false};
    this.loadMore = this.loadMore.bind(this);

  }

  loadMore() {
    const { counter, questions, limit, disabled } = this.state;
    const questionsLength = questions.length;
    if (limit < questionsLength) {
      this.setState({
        counter: counter + 10,
        limit: limit + 10
      });
    }else{
      this.setState({disabled: true});
    }
  }

  render({ ...props }) {
    return (
      <div {...props}>
        <StyledHeading>Users ask: ({this.state.counter})</StyledHeading>

        <Grid >
          {this.state.questions.slice(0, this.state.limit).map((obj, i) =>
            <StyledQuastion key={`${obj.id}-${i}`}
              className="col-12"
              link={`/question/${obj.id}`}
              title={obj.title}
              tags={["tag"]}
            />
          )}
        </Grid>
        <Button className="col-12" disabled={this.state.disabled} onClick={this.loadMore} >More</Button>
      </div>
    );
  }
}

export default QuastionList
