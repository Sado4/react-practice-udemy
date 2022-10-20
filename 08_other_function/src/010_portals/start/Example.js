import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import Modal from './components/Modal';

/* POINT createPortalの使い方
第一引数: React の子要素としてレンダー可能なもの （要素、文字列、フラグメント、コンポーネントなど）
第二引数: レンダー先のDOM要素
*/

/* POINT createPortalはどんなときに使うか？
子要素は親要素のスタイルによって表示に制限を受ける場合があります。
（overflow: hidden 、 z-index 、 width　など・・・ ）
それらの制限なく、子要素が親要素を「飛び出して」表示する必要があるときにcreatePortalを使うのが有効です。
モーダル、ポップアップ、トーストは使用の代表例です。
*/

const ModalPortal = ({ children }) => {
  const target = document.querySelector('.container.start');
  return createPortal(children, target);
};

const Example = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const ref = useRef(null);

  const showModal = () => {
    if (ref.current) {
      ref.current.showModal();
    }
  };

  const closeModal = () => {
    if (ref.current) {
      ref.current.close();
    }
  };
  return (
    // <div onClick={() => }>
    //   <div
    //     className="container start"
    //     onClick={() => }
    //   ></div>

    //   <button
    //     type="button"
    //     onClick={() => setModalOpen(true)}
    //     disabled={modalOpen}
    //   >
    //     モーダルを表示する
    //   </button>
    //   {modalOpen && (
    //     <ModalPortal>
    //       <Modal handleCloseClick={() => setModalOpen(false)} />
    //     </ModalPortal>
    //   )}
    // </div>

    // dialogを使ったモーダル実践
    <>
      <dialog ref={ref}>
        <p>モーダル</p>
        <button type="button" onClick={closeModal}>
          閉じる
        </button>
      </dialog>
      <button type="button" onClick={showModal}>
        モーダルを表示する
      </button>
    </>
  );
};

export default Example;
