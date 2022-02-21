//              B     ---       F
//          /               /       \
//      A               D       |       G
//          \       /
//              C     ---       E

/* Queue data structure */
/* First in - first out */

/* Stack data structure */
/* Last in - first out */


/* search in width */

const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']



function breadthSearch(graph, start, end) {
    let queue = []
    queue.push(start)
    while (queue.length > 0) {
        const current = queue.shift()
        if (!graph[current]) {
            graph[current] = []
        }
        if (graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]]
        }
    }
}

console.log(breadthSearch(graph, 'a', 'g'))
// true - we have path from A to G


/* algoritm dijkstra */

const graphWeight = {}
graphWeight.a = { b: 2, c: 1 }
graphWeight.b = { f: 7 }
graphWeight.c = { d: 5, e: 2 }
graphWeight.d = { f: 2 }
graphWeight.e = { f: 1 }
graphWeight.f = { g: 1 }
graphWeight.g = {}


function shortPath(graph, start, end) {
    const costs = {}
    const processed = []
    let neighbors = {}
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || 100000000
        }
    })
    let node = findNodeLowestCosta(costs, processed)
    while (node) {
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        processed.push(node)
        node = findNodeLowestCosta(costs, processed)
    }
    return costs
}

function findNodeLowestCosta(costs, processed) {
    let lowestCost = 100000000
    let lowestNode;
    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestNode
}

console.log(shortPath(graphWeight, 'a', 'g'))
