import React from "react"

export class Maze {

    mazeDimension: number
    cells: Cell[]

    constructor(mazeDim: number) {
        this.mazeDimension = mazeDim
        this.cells = []
        for(let i = 1; i <= mazeDim; i++ ){
            for(let j = 1; i <= mazeDim; j++){
                this.cells[i*j] = new Cell(i,j)
                if(i == 1){
                    this.cells[i*j].isNorthVisited = true
                }else if(i == mazeDim){
                    this.cells[i*j].isSouthVisited = true
                }

                if(j == 1){
                    this.cells[i*j].isWestVisited = true
                }else if(j == mazeDim){
                    this.cells[i*j].isEastVisited = true
                }
            }
        }
    }

    getCellNorth(currentCell: Cell){
        return this.cells[currentCell.x-1 * currentCell.y]
    }

    getCellEast(currentCell: Cell){
        return this.cells[currentCell.x * currentCell.y+1]
    }

    getCellSouth(currentCell: Cell){
        return this.cells[currentCell.x+1 * currentCell.y]
    }

    getCellWest(currentCell: Cell){
        return this.cells[currentCell.x * currentCell.y-1]
    }
}


export class Cell {
    x: number
    y: number
    northWall = true
    eastWall = true
    southWall = true
    westWall = true
    isNorthVisited = false
    isEastVisited = false
    isSouthVisited = false
    isWestVisited = false

    constructor(x: number, y: number){
        this.x = x
        this.y = y
    }

    hasUnvisitedNeighbors(){
        return(!(this.isNorthVisited && this.isEastVisited && this.isSouthVisited && this.isWestVisited))
    }
}