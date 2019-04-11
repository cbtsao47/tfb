import React from 'react'

const ExpansionPanel = ({ items }) => (
  <>
    {items.map(item => (
      <div className="panel">
        <div className="panel-title">
          <h3>{item.title}</h3>
        </div>
        <div className="panel-description">
          <p>{item.description}</p>
        </div>
      </div>
    ))}
    <style jsx>{`
      .panel {
      }
    `}</style>
  </>
)

export default ExpansionPanel
