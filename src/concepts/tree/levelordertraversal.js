/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let answer = [];
    if (root == null) {

    } else if (root.left === null && root.right === null) {
        answer.push([root.val]);
    } else {
        answer = [];
        let globalQueue = [root],
            isGlobalQEmpty = false,
            localQueue, localResult = [];
        while (!isGlobalQEmpty) {
            localQueue = [], localResult = [];
            while (globalQueue.length > 0) {
                let tmpNode = globalQueue.shift();
                if (tmpNode !== null) {
                    localResult.push(tmpNode.val);
                    tmpNode.left !== null && localQueue.push(tmpNode.left);
                    tmpNode.right !== null && localQueue.push(tmpNode.right);
                }
            }
            answer.push(localResult);
            while (localQueue.length > 0) {
                globalQueue.push(localQueue.shift());
            }
            isGlobalQEmpty = globalQueue.length == 0;
        }

    }
    return answer;
};

/**------------------------------------------- */

/**
 * Get the height of the tree
 * @param {*} root 
 */
function getHeightOfTree(root) {
    if (root == 0) {
        return 0;
    } else {
        let left = getHeightOfTree(root.left);
        let right = getHeightOfTree(root.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }
}

/**
 * print particular level
 * @param {*} root 
 */
function printLevelOrder(root) {
    let height = getHeightOfTree(root);
    for (let i = 1; i <= height; i++) {
        printGivenLevel(root, i);
    }
}

/**
 * Print the given level
 * @param {*} node 
 * @param {*} level 
 */
function printGivenLevel(node, level) {
    if (node == null) {
        return;
    } else if (level === 1) {
        console.log(node.val);
    } else if (level > 1) {
        printGivenLevel(node.left, level - 1);
        printGivenLevel(node.right, level - 1);
    }
}

/**------------------------------------------- */

function printLevelOrderWith1Q(root, result = []) {
    let q = [root];
    while (q.length > 0) {
        result.push([q.shift().val]);
        root.left !== null && q.push(root.left);
        root.right !== null && q.push(root.right);
    }
    return result;
}