document.addEventListener('DOMContentLoaded', () => {
    const scenes = {
        1: document.getElementById('scene1'),
        2: document.getElementById('scene2'),
        3: document.getElementById('scene3'),
        4: document.getElementById('scene4'),
        5: document.getElementById('scene5'),
        6: document.getElementById('scene6'),
        7: document.getElementById('scene7'),
        8: document.getElementById('scene8'),
        9: document.getElementById('scene9'),
        10: document.getElementById('scene10')
    };
    const textElements = {
        6: document.getElementById('scene6Text'),
        8: document.getElementById('scene8Text')
    };
    const buttons = {
        1: document.getElementById('continue1'),
        2: document.getElementById('continue2'),
        3: document.getElementById('continue3'),
        4: document.getElementById('continue4'),
        5: document.getElementById('continue5'),
        6: document.getElementById('continue6'),
        7: document.getElementById('continue7'),
        8: document.getElementById('continue8'),
        9: document.getElementById('continue9')
    };
    let currentScene = 1;
    function showScene(sceneNum) {
        for (let key in scenes) {
            scenes[key].style.display = 'none';
        }
        scenes[sceneNum].style.display = 'block';
        currentScene = sceneNum;
    }
    function updateTextElement(sceneNum, text) {
        if (textElements[sceneNum]) {
            textElements[sceneNum].textContent = text;
        }
    }
    async function findTreasureWithAnimation() {
        try {
            showScene(1);
            await delay(1500); // 等待动画效果
            buttons[1].addEventListener('click', () => { buttons[1].click(); }, { once: true }); // 自动触发继续按钮以进入下一场景
            function onButtonClick(sceneNum) {
                return new Promise(resolve => {
                    buttons[sceneNum].addEventListener('click', () => {
                        resolve();
                    }, { once: true });
                });
            }
            await onButtonClick(1);
            showScene(2);
            const clue = "在古老的图书馆里找到了第一个线索...";
            updateTextElement(2, clue);
            await delay(1500);
            await onButtonClick(2);
            showScene(3);
            const location = "解码成功!宝藏在一座古老的神庙中...";
            updateTextElement(3, location);
            await delay(1500);
            await onButtonClick(3);
            showScene(4);
            // 模拟随机事件
            const searchTempleResult = await simulateSearchTemple();
            updateTextElement(4, searchTempleResult);
            await delay(1500);
            await onButtonClick(4);
            showScene(5);
            // 模拟迷宫导航
            const mazeResult = await simulateNavigateThroughMaze();
            updateTextElement(5, mazeResult);
            await delay(1500);
            await onButtonClick(5);
            showScene(6);
            const puzzleResult = "拼图解答成功，揭示了一条秘密通道。";
            updateTextElement(6, puzzleResult);
            await delay(1500);
            await onButtonClick(6);
            showScene(7);
            // 模拟解锁秘密通道
            const unlockResult = await simulateUnlockSecretPassage();
            updateTextElement(7, unlockResult); // 虽然这里没有文本更新，但保持结构一致
            await delay(1500);
            await onButtonClick(7);
            showScene(8);
            // 模拟绕过陷阱
            const trapsResult = await simulateOutsmartTraps();
            updateTextElement(8, trapsResult);
            await delay(1500);
            await onButtonClick(8);
            showScene(9);
            await delay(1500);
            await onButtonClick(9);
            showScene(10);
            alert('寻宝过程结束！');
        } catch (error) {
            console.error('发生错误:', error);
        }
    }
    // 延迟函数定义
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    // 模拟函数定义
    function simulateSearchTemple() {
        // ... 实现模拟逻辑 ...
    }
    function simulateNavigateThroughMaze() {
        // ... 实现模拟逻辑 ...
    }
    function simulateUnlockSecretPassage() {
        // ... 实现模拟逻辑 ...
    }
    function simulateOutsmartTraps() {
        // ... 实现模拟逻辑 ...
    }
    // 启动寻宝动画
    findTreasureWithAnimation();
});