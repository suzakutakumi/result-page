# result-page
生配信の時に、勝敗の数や連勝、最大の連勝を操作、表示するWebページ

## 使い方
それぞれ4つずつある\[+\] \[-\] \[テキストボックス\]はそれぞれの値に対応しています。  
特殊なのが、勝った時に押す\[+\]と負けた時に押す\[-\]です。  
勝った時に押す\[+\]は押すことで、自動的に\[連勝\]も増加します。また、\[連勝\]が\[最大連勝\]を超えた場合も\[最大連勝\]を更新します。  
負けた時に押す\[-\]は押すことで、自動的に\[連勝\]を0にします。

## OBS Studioでの使い方

最初に、ソースからブラウザを追加してください。  
その時のURLはhttps://suzakutakumi.github.io/result-page/ にしてください。  
![image](https://user-images.githubusercontent.com/71514776/118473252-b8bd3980-b744-11eb-9cc4-1c5fdf4a13f4.png)

そうすると、Web画面の背景が透過した状態で表示されます。  
ここで、良い感じに「何勝 何敗 何連勝 最大何連勝」の部分を切り取ってください。  
(Altを押しながらマウスで枠を移動させるとトリミングができます)  
![image](https://user-images.githubusercontent.com/71514776/118473700-3aad6280-b745-11eb-89a8-272f8a4d3238.png)

最後に、ブラウザを右クリックして、下の方にある\[対話\]を選択します。  
そうすると、ブラウザを操作するウィンドウが出てくるので、そこから勝敗を記録してください。
![image](https://user-images.githubusercontent.com/71514776/118473969-852edf00-b745-11eb-916b-3694effc4fff.png)
