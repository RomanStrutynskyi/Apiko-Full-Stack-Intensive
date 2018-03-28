import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp } from 'styled-tools'
import { Link, Heading, Badge, Block } from 'components'

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px #5b5b5b;

`


const Title = styled.div`
  padding-bottom: 10px;
`

const Info = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;

`
const Tags = styled.div`

`
const StyledBadge = styled(Badge)`
  padding:5px;
  margin: 0 5px 0 0;
  border-radius: 0;
`
const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
`

const QuastionItem = ({
  title, link, tags, ...props
}) => {
  const day = ("00"+(new Date().getDate())).substring(("00"+(new Date().getDate())).length-2);
  const month = ("00"+(new Date().getMonth()+1)).substring(("00"+(new Date().getMonth()+1)).length-2);
  const year = new Date().getFullYear();
  const today = day + '.' + month + '.' + year;
  return (
    <Wrapper {...props}>
      <Title>
        <Heading  level={2}>
          {link ? <StyledLink href={link}>{title}</StyledLink> : title}
        </Heading>
      </Title>
      <Info>
        <Tags>
          {tags.map((tag,index) => <StyledBadge key={tag+index} palette="grayscale">{tag}</StyledBadge>)}
        </Tags>
        <Block>{today}</Block>
      </Info>
      
    </Wrapper>
  )
}

QuastionItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  tags:PropTypes.array
}

export default QuastionItem
