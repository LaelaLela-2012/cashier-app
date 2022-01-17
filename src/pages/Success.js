import React, { Component } from 'react'
import { Button, Image } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Success extends Component {
    render() {
        return (
            <div className='mt-4 text-center'>
                <Image src='assets/images/sukses.png' width={500} className='mb-4' />
                <h2>Pemesanan Sukses</h2>
                <p>Terima kasih telah memesan!</p>
                <Button variant="primary" as={Link} to="/">
                    Kembali
                </Button>
            </div>
        )
    }
}
