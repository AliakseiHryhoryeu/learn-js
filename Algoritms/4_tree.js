/* Tree - this is recursive data structure */


const tree = [
    {
        value: 5,
        childs: [
            {
                value: 10,
                childs: [
                    {
                        value: 11,
                    }
                ]
            },
            {
                value: 7,
                childs: [
                    {
                        value: 5,
                        childs: [
                            {
                                value: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        value: 5,
        childs: [
            {
                value: 10
            },
            {
                value: 15
            }
        ]
    }
]

function recursiveTree(tree) {
    let sum = 0
    tree.forEach(node => {
        sum += node.value
        if (!node.childs) {
            return node.value
        }
        sum += recursiveTree(node.childs)
    })
    return sum
}

/* Stack */
function integrationTree(tree) {
    if (!tree.length) {
        return 0
    }
    let sum = 0
    let stack = []
    tree.forEach(node => stack.push(node))
    while (stack.length) {
        const node = stack.pop()
        sum += node.value
        if (node.childs) {
            node.childs.forEach(child => stack.push(child))
        }
    }
    return sum
}

console.log(recursiveTree(tree))
console.log(integrationTree(tree))
